import { ContactForm } from '@/components/forms/ContactForm'

export default function ContactPage() {
	return (
		<div className='container mx-auto px-4 py-8 md:py-12'>
			<h1 className='m-auto mb-6 max-w-[800px] text-2xl font-bold'>Контакты</h1>
			<section className='m-auto mb-24 flex w-full max-w-[800px] flex-col gap-10 sm:flex-row'>
				<div>
					<p>
						<strong>Офис: </strong> г. Москва, ул. Хромова, д. 20, оф. 112
					</p>
					<p>
						<strong>Пункт выдачи: </strong> г. Москва, ул. Перовская, д. 66, к.
						2
					</p>
					<p>
						<strong>Телефон:</strong> +7 (985) 894-91-19
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
						<p>Телефон: +7 (985) 894-91-19</p>
					</div>
				</div>
				<div className='m-auto w-fit sm:w-1/2'>
					<iframe
						src='https://yandex.ru/map-widget/v1/?um=constructor%3A18232637f5758c8e3baa8925c7530cca5c6d3e3651733f104cf514695d5f0d35&amp;source=constructor'
						width='300'
						height='300'
						frameBorder='0'
					></iframe>
				</div>
			</section>
			<section className='m-auto flex w-full max-w-[600px] flex-col gap-10'>
				<h2 className='text-xl font-bold'>Обратная связь</h2>
				<ContactForm />
			</section>
		</div>
	)
}
