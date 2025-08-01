-- Включаем RLS обратно после миграции
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