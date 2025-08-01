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