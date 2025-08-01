-- Создание таблицы категорий
CREATE TABLE IF NOT EXISTS categories (
  id BIGSERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL UNIQUE,
  slug VARCHAR(255) NOT NULL UNIQUE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Создание таблицы производителей
CREATE TABLE IF NOT EXISTS companies (
  id BIGSERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL UNIQUE,
  country VARCHAR(100),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Создание таблицы товаров
CREATE TABLE IF NOT EXISTS products (
  id BIGSERIAL PRIMARY KEY,
  original_id INTEGER UNIQUE,
  title VARCHAR(255) NOT NULL,
  fullname TEXT NOT NULL,
  description TEXT,
  price DECIMAL(10,2) NOT NULL,
  image VARCHAR(500),
  category_id BIGINT REFERENCES categories(id),
  company_id BIGINT REFERENCES companies(id),
  available BOOLEAN DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Создание индексов для быстрого поиска
CREATE INDEX IF NOT EXISTS idx_products_category ON products(category_id);
CREATE INDEX IF NOT EXISTS idx_products_company ON products(company_id);
CREATE INDEX IF NOT EXISTS idx_products_price ON products(price);
CREATE INDEX IF NOT EXISTS idx_products_available ON products(available);
CREATE INDEX IF NOT EXISTS idx_products_title ON products USING gin(to_tsvector('russian', title));
CREATE INDEX IF NOT EXISTS idx_products_fullname ON products USING gin(to_tsvector('russian', fullname));

-- Включение Row Level Security
ALTER TABLE categories ENABLE ROW LEVEL SECURITY;
ALTER TABLE companies ENABLE ROW LEVEL SECURITY;
ALTER TABLE products ENABLE ROW LEVEL SECURITY;

-- Политики для публичного доступа на чтение
CREATE POLICY "public can read categories" ON categories
  FOR SELECT TO anon USING (true);

CREATE POLICY "public can read companies" ON companies
  FOR SELECT TO anon USING (true);

CREATE POLICY "public can read products" ON products
  FOR SELECT TO anon USING (true);

-- Политики для записи данных (для миграции)
CREATE POLICY "public can insert categories" ON categories
  FOR INSERT TO anon WITH CHECK (true);

CREATE POLICY "public can insert companies" ON companies
  FOR INSERT TO anon WITH CHECK (true);

CREATE POLICY "public can insert products" ON products
  FOR INSERT TO anon WITH CHECK (true);

-- Политики для обновления данных
CREATE POLICY "public can update categories" ON categories
  FOR UPDATE TO anon USING (true) WITH CHECK (true);

CREATE POLICY "public can update companies" ON companies
  FOR UPDATE TO anon USING (true) WITH CHECK (true);

CREATE POLICY "public can update products" ON products
  FOR UPDATE TO anon USING (true) WITH CHECK (true);

-- Функция для автоматического обновления updated_at
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ language 'plpgsql';

-- Триггер для автоматического обновления updated_at
CREATE TRIGGER update_products_updated_at
  BEFORE UPDATE ON products
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column(); 