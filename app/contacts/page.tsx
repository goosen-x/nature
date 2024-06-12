export default function ContactPage() {
	return (
		<div className='container mx-auto px-4 py-8 md:py-12'>
			<h1 className='mb-6 text-2xl font-bold'>Контакты</h1>

			<section className='mb-24 flex h-80 w-full justify-between gap-10'>
				<iframe
					className='h-full w-full'
					src='https://yandex.ru/map-widget/v1/?um=constructor%3A18232637f5758c8e3baa8925c7530cca5c6d3e3651733f104cf514695d5f0d35&amp;source=constructor'
					width='400'
					height='400'
					frameBorder='0'
				></iframe>
				<div>
					<h2 className='mb-4 text-xl font-bold'>Контактная информация</h2>
					<p>
						<strong>Офис: </strong> г. Москва, ул. Хромова, д. 20, оф. 112
					</p>
					<p>
						<strong>Пункт выдачи: </strong> г. Москва, ул. Перовская, д. 66, к.
						2
					</p>
					<p>
						<strong>Телефон:</strong> +7 (926) 707-80-64
					</p>
					<p>
						<strong>Email:</strong>{' '}
						<a href='mailto:medvedeva.nsp@ro.ru'>medvedeva.nsp@ro.ru</a>
					</p>
					<p>
						<strong>Режим работы:</strong> Пн - Пт: с 9:00 до 19:00 Сб: с 11:00
						до 17:00
					</p>
					<div className='mt-4'>
						<p>Независимый дистрибьютер Медведева&nbsp;А.С.</p>
						<p>Телефон: +7 (926) 707-80-64</p>
					</div>
				</div>
			</section>
		</div>
	)
}
