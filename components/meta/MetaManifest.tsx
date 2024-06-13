import favicon from '@/public/meta/favicon.ico'

export const MetaManifest = () => {
	return (
		<>
			<meta
				name='description'
				content='Купить биологически активные добавки NSP. Высококачественные натуральные добавки для здоровья и долголетия. Доставка по всей России.'
			/>
			<link rel='canonical' href='https://www.nsp-healthshop.ru/' />
			<meta
				name='keywords'
				content='биологически активные добавки, NSP, натуральные добавки, здоровье, долголетие, витамины, минералы, купить БАД'
			/>
			<meta name='author' content='NSP Health Shop' />
			<meta name='robots' content='index, follow' />

			<link rel='manifest' href='/site.webmanifest' />
			<meta property='og:type' content='website' />
			<meta property='og:site_name' content='NSP Health Shop' />

			{/* <!-- Facebook Meta Tags --> */}
			<meta property='og:url' content='https://www.nsp-healthshop.ru/' />
			<meta
				property='og:title'
				content='NSP Health Shop - Биологически активные добавки'
			/>
			<meta
				property='og:description'
				content='Высококачественные биологически активные добавки NSP для здоровья и долголетия. Закажите сейчас и получите доставку по всей России.'
			/>
			<meta property='og:image' content='/meta/og-image.jpg' />

			{/* <!-- Twitter Meta Tags --> */}
			<meta name='twitter:card' content='summary_large_image' />
			<meta property='twitter:domain' content='nsp-healthshop.ru' />
			<meta property='twitter:url' content='https://www.nsp-healthshop.ru/' />
			<meta
				name='twitter:title'
				content='NSP Health Shop - Биологически активные добавки'
			/>
			<meta
				name='twitter:description'
				content='Высококачественные биологически активные добавки NSP для здоровья и долголетия. Закажите сейчас и получите доставку по всей России.'
			/>
			<meta name='twitter:image' content='/meta/og-image.jpg' />
		</>
	)
}
