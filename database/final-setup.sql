-- Финальная настройка безопасности после миграции

-- Включаем RLS
ALTER TABLE categories ENABLE ROW LEVEL SECURITY;
ALTER TABLE companies ENABLE ROW LEVEL SECURITY;
ALTER TABLE products ENABLE ROW LEVEL SECURITY;

-- Удаляем старые политики (если есть)
DROP POLICY IF EXISTS "public can read categories" ON categories;
DROP POLICY IF EXISTS "public can read companies" ON companies;
DROP POLICY IF EXISTS "public can read products" ON products;

-- Создаем политики только для чтения
CREATE POLICY "public can read categories" ON categories
  FOR SELECT TO anon USING (true);

CREATE POLICY "public can read companies" ON companies
  FOR SELECT TO anon USING (true);

CREATE POLICY "public can read products" ON products
  FOR SELECT TO anon USING (true); 