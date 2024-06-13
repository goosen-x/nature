import products from '@/data/products.json'
import toNumberWithSpaces from './toNumberWithSpaces'
import { getDateTime } from './getDateTime'

type Product = {
	id: string
	title: string
	price: number
}

type Items = {
	[key: string]: number
}

type CreateEmailBodyParams = {
	username: string
	phone: string
	email: string
	items: Items
}

export const createEmailBody = ({
	username,
	phone,
	email,
	items
}: CreateEmailBodyParams) => {
	const createTr = (item, idx) => {
		const output = /* html */ `
      <tr id='tr-item-${idx}' class="${
				idx % 2 === 0 && 'bgOnEven'
			} ${item.tdKey === 'Телефон' && 'active-row'} ${
				!(idx + 1) && 'bgBorderHighlight'
			}">
        <td class="counterCell">${idx + 1}</td>
        <td>${item.tdKey}</td>
        <td>${item.tdVal}</td>
      </tr>
    `
		return output
	}

	const userDetails = [
		{
			tdKey: 'Дата',
			tdVal: getDateTime() || ''
		},
		{
			tdKey: 'Имя',
			tdVal: username || ''
		},
		{
			tdKey: 'Телефон',
			tdVal: phone || ''
		},
		{
			tdKey: 'E-mail',
			tdVal: email || ''
		}
	]

	const entries = Object.entries(items)

	const itemDetails = entries.map(([key, value]) => ({
		tdKey: products.find(p => Number(p.id) === Number(key))?.title || key,
		tdVal: value
	}))

	const total = entries.reduce((total, [key, value]) => {
		const product = products.find(p => Number(p.id) === Number(key))
		return total + (product ? product.price * value : 0)
	}, 0)

	const output = /* html */ `
    <!DOCTYPE html>
    <html lang="ru">
      <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    
        <style>
          .styled-table {
            border-collapse: collapse;
            margin: 25px 0;
            font-size: 0.9em;
            font-family: sans-serif;
            min-width: 400px;
            box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
            counter-reset: tableCount;
          }
          .counterCell::before {
            content: counter(tableCount);
            counter-increment: tableCount;
          }
          .styled-table thead tr {
            background-color: #ff3535;
            color: #ffffff;
            text-align: left;
          }
          .styled-table th,
          .styled-table td {
            padding: 12px 15px;
          }
          .styled-table tbody tr {
            border-bottom: thin solid #dddddd;
          }
    
          .styled-table tbody tr:nth-of-type(even),
          .bgOnEven {
            background-color: #f3f3f3;
          }
    
          .styled-table tbody tr:last-of-type,
          .bgBorderHighlight {
            border-bottom: 2px solid #ff3535;
          }
          .styled-table tbody tr.active-row {
            font-weight: bold;
            color: #ff3535;
          }
        </style>
        <title>Новая заявка с https://www.nsp-healthshop.ru/</title>
      </head>
      <body>
        <h1>Новая заявка с https://www.nsp-healthshop.ru/</h1>
        <p>🎉🥳🎉 Ура! Новая заявка! 🎉🥳🎉</p>
        <table class="styled-table">
          <thead>
            <tr>
              <th>#</th>
              <th>Ключ</th>
              <th>Значение</th>
            </tr>
          </thead>
          <tbody>
            ${userDetails.map(createTr).join('')}
          </tbody>
        </table>
        <table class="styled-table">
          <thead>
            <tr>
              <th>#</th>
              <th>Товар</th>
              <th>Количество</th>
            </tr>
          </thead>
          <tbody>
            ${itemDetails.map(createTr).join('')}
          </tbody>
        </table>
        <p>Сумма заказа: ${toNumberWithSpaces(total)}</p>
      </body>
    </html>
  `
	return output
}
