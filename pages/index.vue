<template>
	<div>
		<!-- <h1 class="title">weather-nuxt</h1> -->
		<div class="preloader" style="opacity: 1">
			<svg
				version="1.1"
				id="sun"
				xmlns="http://www.w3.org/2000/svg"
				xmlns:xlink="http://www.w3.org/1999/xlink"
				x="0px"
				y="0px"
				width="10px"
				height="10px"
				viewBox="0 0 10 10"
				enable-background="new 0 0 10 10"
				xml:space="preserve"
				style="opacity: 1; margin-left: 0px; margin-top: 0px"
			>
				<g>
					<path
						fill="none"
						d="M6.942,3.876c-0.4-0.692-1.146-1.123-1.946-1.123c-0.392,0-0.779,0.104-1.121,0.301c-1.072,0.619-1.44,1.994-0.821,3.067C3.454,6.815,4.2,7.245,5,7.245c0.392,0,0.779-0.104,1.121-0.301C6.64,6.644,7.013,6.159,7.167,5.581C7.321,5,7.243,4.396,6.942,3.876z M6.88,5.505C6.745,6.007,6.423,6.427,5.973,6.688C5.676,6.858,5.34,6.948,5,6.948c-0.695,0-1.343-0.373-1.69-0.975C2.774,5.043,3.093,3.849,4.024,3.312C4.32,3.14,4.656,3.05,4.996,3.05c0.695,0,1.342,0.374,1.69,0.975C6.946,4.476,7.015,5,6.88,5.505z"
					></path>
					<path
						fill="none"
						d="M8.759,2.828C8.718,2.757,8.626,2.732,8.556,2.774L7.345,3.473c-0.07,0.041-0.094,0.132-0.053,0.202C7.319,3.723,7.368,3.75,7.419,3.75c0.025,0,0.053-0.007,0.074-0.02l1.211-0.699C8.774,2.989,8.8,2.899,8.759,2.828z"
					></path>
					<path
						fill="none"
						d="M1.238,7.171c0.027,0.047,0.077,0.074,0.128,0.074c0.025,0,0.051-0.008,0.074-0.02l1.211-0.699c0.071-0.041,0.095-0.133,0.054-0.203S2.574,6.228,2.503,6.269l-1.21,0.699C1.221,7.009,1.197,7.101,1.238,7.171z"
					></path>
					<path
						fill="none"
						d="M6.396,2.726c0.052,0,0.102-0.026,0.13-0.075l0.349-0.605C6.915,1.976,6.89,1.885,6.819,1.844c-0.07-0.042-0.162-0.017-0.202,0.054L6.269,2.503C6.228,2.574,6.251,2.666,6.322,2.706C6.346,2.719,6.371,2.726,6.396,2.726z"
					></path>
					<path
						fill="none"
						d="M3.472,7.347L3.123,7.952c-0.041,0.07-0.017,0.162,0.054,0.203C3.2,8.169,3.226,8.175,3.25,8.175c0.052,0,0.102-0.027,0.129-0.074l0.349-0.605c0.041-0.07,0.017-0.16-0.054-0.203C3.603,7.251,3.513,7.276,3.472,7.347z"
					></path>
					<path
						fill="none"
						d="M3.601,2.726c0.025,0,0.051-0.007,0.074-0.02C3.746,2.666,3.77,2.574,3.729,2.503l-0.35-0.604C3.338,1.828,3.248,1.804,3.177,1.844C3.106,1.886,3.082,1.976,3.123,2.047l0.35,0.604C3.5,2.7,3.549,2.726,3.601,2.726z"
					></path>
					<path
						fill="none"
						d="M6.321,7.292c-0.07,0.043-0.094,0.133-0.054,0.203l0.351,0.605c0.026,0.047,0.076,0.074,0.127,0.074c0.025,0,0.051-0.006,0.074-0.02c0.072-0.041,0.096-0.133,0.055-0.203l-0.35-0.605C6.483,7.276,6.393,7.253,6.321,7.292z"
					></path>
					<path
						fill="none"
						d="M2.202,5.146c0.082,0,0.149-0.065,0.149-0.147S2.284,4.851,2.202,4.851H1.503c-0.082,0-0.148,0.066-0.148,0.148s0.066,0.147,0.148,0.147H2.202z"
					></path>
					<path
						fill="none"
						d="M8.493,4.851H7.794c-0.082,0-0.148,0.066-0.148,0.148s0.066,0.147,0.148,0.147l0,0h0.699c0.082,0,0.148-0.065,0.148-0.147S8.575,4.851,8.493,4.851L8.493,4.851z"
					></path>
					<path
						fill="none"
						d="M5.146,2.203V0.805c0-0.082-0.066-0.148-0.148-0.148c-0.082,0-0.148,0.066-0.148,0.148v1.398c0,0.082,0.066,0.149,0.148,0.149C5.08,2.352,5.146,2.285,5.146,2.203z"
					></path>
					<path
						fill="none"
						d="M4.85,7.796v1.396c0,0.082,0.066,0.15,0.148,0.15c0.082,0,0.148-0.068,0.148-0.15V7.796c0-0.082-0.066-0.148-0.148-0.148C4.917,7.647,4.85,7.714,4.85,7.796z"
					></path>
					<path
						fill="none"
						d="M2.651,3.473L1.44,2.774C1.369,2.732,1.279,2.757,1.238,2.828C1.197,2.899,1.221,2.989,1.292,3.031l1.21,0.699c0.023,0.013,0.049,0.02,0.074,0.02c0.051,0,0.101-0.026,0.129-0.075C2.747,3.604,2.722,3.514,2.651,3.473z"
					></path>
					<path
						fill="none"
						d="M8.704,6.968L7.493,6.269c-0.07-0.041-0.162-0.016-0.201,0.055c-0.041,0.07-0.018,0.162,0.053,0.203l1.211,0.699c0.023,0.012,0.049,0.02,0.074,0.02c0.051,0,0.102-0.027,0.129-0.074C8.8,7.101,8.776,7.009,8.704,6.968z"
					></path>
				</g>
			</svg>

			<svg
				version="1.1"
				id="cloud"
				xmlns="http://www.w3.org/2000/svg"
				xmlns:xlink="http://www.w3.org/1999/xlink"
				x="0px"
				y="0px"
				width="10px"
				height="10px"
				viewBox="0 0 10 10"
				enable-background="new 0 0 10 10"
				xml:space="preserve"
			>
				<path
					fill="none"
					d="M8.528,5.624H8.247c-0.085,0-0.156-0.068-0.156-0.154c0-0.694-0.563-1.257-1.257-1.257c-0.098,0-0.197,0.013-0.3,0.038C6.493,4.259,6.45,4.252,6.415,4.229C6.38,4.208,6.356,4.172,6.348,4.131C6.117,3.032,5.135,2.235,4.01,2.235c-1.252,0-2.297,0.979-2.379,2.23c-0.004,0.056-0.039,0.108-0.093,0.13C1.076,4.793,0.776,5.249,0.776,5.752c0,0.693,0.564,1.257,1.257,1.257h6.495c0.383,0,0.695-0.31,0.695-0.692S8.911,5.624,8.528,5.624z"
				></path>
			</svg>

			<div class="rain">
				<span class="drop"></span>
				<span class="drop"></span>
				<span class="drop"></span>
				<span class="drop"></span>
				<span class="drop"></span>
				<span class="drop"></span>
				<span class="drop"></span>
				<span class="drop"></span>
				<span class="drop"></span>
				<span class="drop"></span>
			</div>

			<div class="text">Recherche de la météo pour votre emplacement</div>
		</div>
		<div class="wrapper">
			<div class="container">
				<div class="weather-side">
					<div class="weather-gradient"></div>
					<div class="date-container">
						<h2 class="date-dayname">{{ today.dotw_full }}</h2>
						<div class="date-day">
							{{ today.day }} {{ today.month }} {{ today.year }}
						</div>
						<div class="location">
							<i class="location-icon" data-feather="map-pin"></i
							>{{ today.city }}, {{ today.country }}
						</div>
					</div>
					<div class="weather-container">
						<div class="weather-icon">{{ today.icon }}</div>
						<h1 class="weather-temp">{{ today.temperature }}°C</h1>
						<h3 class="weather-desc">
							{{ today.description }}
						</h3>
					</div>
				</div>

				<div class="info-side">
					<div class="today-info-container">
						<div class="today-info">
							<div class="max_temp">
								<div class="title"><i data-feather="thermometer"></i>Température maximale</div>
								<div class="value">{{ today.max_temperature }}°C</div>
								<div class="clear"></div>
							</div>
							<div class="humidity">
								<div class="title"><i data-feather="droplet"></i>Humidité</div>
								<div class="value">{{ today.humidity }} %</div>
								<div class="clear"></div>
							</div>
							<div class="wind">
								<div class="title"><i data-feather="wind"></i>Vent [{{ today.wind.direction }}]</div>
								<div class="value">{{ today.wind.speed }} м/с</div>
								<div class="clear"></div>
							</div>
							<div class="pressure">
								<div class="title"><i data-feather="sunset"></i>Pression</div>
								<div class="value">{{ today.pressure }} mm/Hg</div>
								<div class="clear"></div>
							</div>
							<div class="pop">
								<div class="title"><i data-feather="percent"></i>Précipitations</div>
								<div class="value">{{ today.pop }} %</div>
								<div class="clear"></div>
							</div>
						</div>
					</div>
					<div class="week-container">
						<ul class="week-list">
							<li @click="changeDay(1)">
								<div class="day-icon">{{ nextDay.icon }}</div>
								<div class="day-name">{{ nextDay.dotw }}</div>
								<div class="day-temp">{{ nextDay.temperature }}°C</div>
							</li>
							<li @click="changeDay(2)">
								<div class="day-icon">{{ next2Day.icon }}</div>
								<div class="day-name">{{ next2Day.dotw }}</div>
								<div class="day-temp">{{ next2Day.temperature }}°C</div>
							</li>
							<li @click="changeDay(3)">
								<div class="day-icon">{{ next3Day.icon }}</div>
								<div class="day-name">{{ next3Day.dotw }}</div>
								<div class="day-temp">{{ next3Day.temperature }}°C</div>
							</li>
							<li @click="changeDay(4)">
								<div class="day-icon">{{ next4Day.icon }}</div>
								<div class="day-name">{{ next4Day.dotw }}</div>
								<div class="day-temp">{{ next4Day.temperature }}°C</div>
							</li>
							<div class="clear"></div>
						</ul>
					</div>
					<div class="location-container">
						<button @click="backup()" class="location-button">
							<i data-feather="map-pin"></i>
							Retour au {{ today_backup.day }} {{ today_backup.month }}
						</button>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import feather from 'feather-icons'
export default {
	data() {
		return {
			today: {
				dotw: '---',
				dotw_full: '------',
				day: '-',
				month: '-------',
				year: '-------',
				city: '--------',
				country: '--',
				icon: '---',
				temperature: '--',
				max_temperature: '--',
				description: '-----',

				humidity: '--',
				wind: {
					direction: '---',
					speed: '--'
				},
				pressure: '---',
				pop: '--'
			},

			today_backup: {
				dotw: '---',
				dotw_full: '------',
				day: '-',
				month: '-------',
				year: '-------',
				city: '--------',
				country: '--',
				icon: '---',
				temperature: '--',
				max_temperature: '--',
				description: '-----',

				humidity: '--',
				wind: {
					direction: '---',
					speed: '--'
				},
				pressure: '---',
				pop: '--'
			},

			nextDay: {
				dotw: '---',
				dotw_full: '------',
				day: '-',
				month: '-------',
				year: '-------',
				city: '--------',
				country: '--',
				icon: '---',
				temperature: '--',
				max_temperature: '--',
				description: '-----',

				humidity: '--',
				wind: {
					direction: '---',
					speed: '--'
				},
				pressure: '---',
				pop: '--'
			},

			next2Day: {
				dotw: '---',
				dotw_full: '------',
				day: '-',
				month: '-------',
				year: '-------',
				city: '--------',
				country: '--',
				icon: '---',
				temperature: '--',
				max_temperature: '--',
				description: '-----',

				humidity: '--',
				wind: {
					direction: '---',
					speed: '--'
				},
				pressure: '---',
				pop: '--'
			},

			next3Day: {
				dotw: '---',
				dotw_full: '------',
				day: '-',
				month: '-------',
				year: '-------',
				city: '--------',
				country: '--',
				icon: '---',
				temperature: '--',
				max_temperature: '--',
				description: '-----',

				humidity: '--',
				wind: {
					direction: '---',
					speed: '--'
				},
				pressure: '---',
				pop: '--'
			},

			next4Day: {
				dotw: '---',
				dotw_full: '------',
				day: '-',
				month: '-------',
				year: '-------',
				city: '--------',
				country: '--',
				icon: '---',
				temperature: '--',
				max_temperature: '--',
				description: '-----',

				humidity: '--',
				wind: {
					direction: '---',
					speed: '--'
				},
				pressure: '---',
				pop: '--'
			}
		}
	},
	methods: {
		changeDay(number) {
			let li = document.querySelectorAll('li');
			[].forEach.call(li, function(el) {el.classList.remove('active')})
			document.querySelector(`li:nth-child(${number})`).className = 'active'
			document.querySelector('.location-button').style.visibility = 'visible'

			if (number == 1) {
				this.today = this.nextDay
			}
			if (number == 2) {
				this.today = this.next2Day
			}
			if (number == 3) {
				this.today = this.next3Day
			}
			if (number == 4) {
				this.today = this.next4Day
			}
		},

		backup() {
			let li = document.querySelectorAll('li');
			[].forEach.call(li, function(el) {
				el.classList.remove('active')
			})
			this.today = this.today_backup
			document.querySelector('.location-button').style.visibility = 'hidden'
		}
	},
	async mounted() {
		async function returnCoordinates() {
			// var options = [(enableHighAccuracy = true)];
			function errorHandler(err) {
				console.warn(`ERREUR (${err.code}): ${err.message}`)
			}

			return new Promise((res, rej) => {
				navigator.geolocation.getCurrentPosition(
					function(position) {
						let result = []
						let latitude = position.coords.latitude
						let longititude = position.coords.longitude
						latitude = parseFloat(latitude.toFixed(3))
						longititude = parseFloat(longititude.toFixed(3))
						result = [latitude, longititude]
						res(result)
					},
					errorHandler,
					{
						enableHighAccuracy: true
					}
				)
			})
		}

		let result = await returnCoordinates()
		console.log('Latitude: ', result[0], ' Longititude: ', result[1])

		feather.replace()

		this.$axios
			.$get(
				`https://api.weatherbit.io/v2.0/forecast/daily?lat=${result[0]}&lon=${result[1]}&lang=en&key=03704ace18e04304accfe4c756b40935&days=5`
			)
			.then(res => {
				window.console.log(res)
				let info = res
				let today = new Date()
				const daysOfTheWeek = {
					0: 'Dimache',
					1: 'Lundi',
					2: 'Mardi',
					3: 'Mercredi',
					4: 'Jeudi',
					5: 'Vendredi',
					6: 'Samedi',
					7: 'Dimache',
					8: 'Lundi',
					9: 'Mardi',
					10: 'Mercredi',
					11: 'Jeudi',
					12: 'Vendredi',
					13: 'Samedi',
					14: 'Dimache'
				}
				const shortdotw = {
					0: 'Dim',
					1: 'Lun',
					2: 'Mar',
					3: 'Mer',
					4: 'Jeu',
					5: 'Ven',
					6: 'Sam',
					7: 'Dim',
					8: 'Lun',
					9: 'Mar',
					10: 'Mer',
					11: 'Jeu',
					12: 'Ven',
					13: 'Sam',
					14: 'Dim'
				}
				let weekNumber = today.getDay()
				let monthNumber = today.getMonth()
				const months = {
					0: 'Janv.',
					1: 'Févr.',
					2: 'Mars',
					3: 'Avr.',
					4: 'Mai',
					5: 'Juin',
					6: 'Juil.',
					7: 'Août',
					8: 'Sept',
					9: 'Oct.',
					10: 'Nov.',
					11: 'Dec.'
				}

				const icons = {
					200: '⛈', // Thunderstorm with light rain
					201: '⛈', // Thunderstorm with rain
					202: '⛈', // Thunderstorm with heavy rain
					230: '⛈', // Thunderstorm with light drizzle
					231: '⛈', // Thunderstorm with drizzle
					232: '⛈', // Thunderstorm with heavy drizzle
					233: '⛈', // Thunderstorm with Hail

					300: '☔️', // Light Drizzle
					301: '☔️', // Drizzle
					302: '☔️', // Heavy Drizzle

					500: '🌧', // Light Rain
					501: '🌧', // Moderate Rain
					502: '⛈', // Heavy Rain
					511: '🌧', // Freezing rain
					520: '🌦', // Light shower rain
					521: '🌧', // Shower rain
					522: '🌧', // Heavy shower rain

					600: '❅', // Light snow
					601: '❄︎', // Snow
					602: '❆', // Heavy Snow
					610: '❄️', // Mix snow/rain

					611: 'flaticon-004-snow-7', // Sleet
					612: 'flaticon-003-snow-8', // Heavy sleet

					621: '🏂', // Snow shower
					622: '🏂', // Heavy snow shower
					623: '🏂', // Flurries

					700: '🌫', // Mist
					711: '💨', // Smoke
					721: '🌿', // Haze
					731: '🏖', // Sand/dust
					741: '🌁', // Fog
					751: '🌁', // Freezing Fog

					800: '🌆', // Clear sky
					801: '☁️', // Few cloudssn
					802: '⛅️', // Scattered clouds
					803: '💔☁️', // Broken clouds
					804: '⛅️', // Overcast clouds

					900: 'flaticon-102-smartphone' // Unknown Precipitation
				}

				this.today.dotw = shortdotw[weekNumber]
				this.today.dotw_full = daysOfTheWeek[weekNumber]
				this.today.day = parseInt(info.data[0].valid_date.slice(8))
				this.today.month =
					months[
						parseInt(info.data[0].valid_date.slice(5).slice(0, 2)) -
							1
					]
				this.today.year = parseInt(info.data[0].valid_date.slice(0, 4))
				this.today.city = info.city_name
				this.today.country = info.country_code
				this.today.icon = icons[info.data[0].weather.code]
				this.today.temperature = Math.round(info.data[0].temp)
				this.today.max_temperature = Math.round(info.data[0].max_temp)
				this.today.description = info.data[0].weather.description
				this.today.humidity = info.data[0].rh
				this.today.wind.speed = Math.round(info.data[0].wind_spd)
				this.today.wind.direction = info.data[0].wind_cdir
				this.today.pressure = Math.round(info.data[0].pres * 0.75006)
				this.today.pop = info.data[0].pop
				this.today_backup = this.today

				this.nextDay.dotw = shortdotw[weekNumber + 1]
				this.nextDay.dotw_full = daysOfTheWeek[weekNumber + 1]
				this.nextDay.day = parseInt(info.data[1].valid_date.slice(8))
				this.nextDay.month =
					months[
						parseInt(info.data[1].valid_date.slice(5).slice(0, 2)) -
							1
					]
				this.nextDay.year = parseInt(
					info.data[1].valid_date.slice(0, 4)
				)
				this.nextDay.city = info.city_name
				this.nextDay.country = info.country_code
				this.nextDay.icon = icons[info.data[1].weather.code]
				this.nextDay.temperature = Math.round(info.data[1].temp)
				this.nextDay.max_temperature = Math.round(info.data[1].max_temp)
				this.nextDay.description = info.data[1].weather.description
				this.nextDay.humidity = info.data[1].rh
				this.nextDay.wind.speed = Math.round(info.data[1].wind_spd)
				this.nextDay.wind.direction = info.data[1].wind_cdir
				this.nextDay.pressure = Math.round(info.data[1].pres * 0.75006)
				this.nextDay.pop = info.data[1].pop
				// console.log('NEXTDAY', this.nextDay)

				this.next2Day.dotw = shortdotw[weekNumber + 2]
				this.next2Day.dotw_full = daysOfTheWeek[weekNumber + 2]
				this.next2Day.day = parseInt(info.data[2].valid_date.slice(8))
				this.next2Day.month =
					months[
						parseInt(info.data[2].valid_date.slice(5).slice(0, 2)) -
							1
					]
				this.next2Day.year = parseInt(
					info.data[2].valid_date.slice(0, 4)
				)
				this.next2Day.city = info.city_name
				this.next2Day.country = info.country_code
				this.next2Day.icon = icons[info.data[2].weather.code]
				this.next2Day.temperature = Math.round(info.data[2].temp)
				this.next2Day.max_temperature = Math.round(
					info.data[2].max_temp
				)
				this.next2Day.description = info.data[2].weather.description
				this.next2Day.humidity = info.data[2].rh
				this.next2Day.wind.speed = Math.round(info.data[2].wind_spd)
				this.next2Day.wind.direction = info.data[2].wind_cdir
				this.next2Day.pressure = Math.round(info.data[2].pres * 0.75006)
				this.next2Day.pop = info.data[2].pop
				// console.log('NEXT2DAY', this.next2Day)

				this.next3Day.dotw = shortdotw[weekNumber + 3]
				this.next3Day.dotw_full = daysOfTheWeek[weekNumber + 3]
				this.next3Day.day = parseInt(info.data[3].valid_date.slice(8))
				this.next3Day.month =
					months[
						parseInt(info.data[3].valid_date.slice(5).slice(0, 2)) -
							1
					]
				this.next3Day.year = parseInt(
					info.data[3].valid_date.slice(0, 4)
				)
				this.next3Day.city = info.city_name
				this.next3Day.country = info.country_code
				this.next3Day.icon = icons[info.data[3].weather.code]
				this.next3Day.temperature = Math.round(info.data[3].temp)
				this.next3Day.max_temperature = Math.round(
					info.data[3].max_temp
				)
				this.next3Day.description = info.data[3].weather.description
				this.next3Day.humidity = info.data[3].rh
				this.next3Day.wind.speed = Math.round(info.data[2].wind_spd)
				this.next3Day.wind.direction = info.data[3].wind_cdir
				this.next3Day.pressure = Math.round(info.data[3].pres * 0.75006)
				this.next3Day.pop = info.data[3].pop
				// console.log('NEXT3DAY', this.next3Day)

				this.next4Day.dotw = shortdotw[weekNumber + 4]
				this.next4Day.dotw_full = daysOfTheWeek[weekNumber + 4]
				this.next4Day.day = parseInt(info.data[4].valid_date.slice(8))
				this.next4Day.month =
					months[
						parseInt(info.data[4].valid_date.slice(5).slice(0, 2)) -
							1
					]
				this.next4Day.year = parseInt(
					info.data[4].valid_date.slice(0, 4)
				)
				this.next4Day.city = info.city_name
				this.next4Day.country = info.country_code
				this.next4Day.icon = icons[info.data[4].weather.code]
				this.next4Day.temperature = Math.round(info.data[4].temp)
				this.next4Day.max_temperature = Math.round(
					info.data[4].max_temp
				)
				this.next4Day.description = info.data[4].weather.description
				this.next4Day.humidity = info.data[4].rh
				this.next4Day.wind.speed = Math.round(info.data[2].wind_spd)
				this.next4Day.wind.direction = info.data[4].wind_cdir
				this.next4Day.pressure = Math.round(info.data[4].pres * 0.75006)
				this.next4Day.pop = info.data[4].pop
				// console.log('NEXT4DAY', this.next4Day)
				hidePreloader()

				const faviconHref = value => {
					return `data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%22256%22 height=%22256%22 viewBox=%220 0 75 75 %22 fill=%22white%22><text x=%2250%%22 y=%2250%%22 dominant-baseline=%22central%22 text-anchor=%22middle%22 font-size=%2258%22 stroke=%22black%22 fill=%22white%22>${value}</text></svg>`
				}

				const changeFavicon = favicon => {
					if (typeof window === 'undefined') {
						return
					}
					const link =
						window.document.querySelector("link[rel*='icon']") ||
						window.document.createElement('link')
					link.type = 'image/svg+xml'
					link.rel = 'shortcut icon'
					link.href = faviconHref(favicon)

					window.document
						.getElementsByTagName('head')[0]
						.appendChild(link)
				}

				let temp = this.today.temperature
				changeFavicon(temp)

				document.title = `${this.today.dotw_full}: ${this.today.description}`
			})
	}
}

function hidePreloader() {
	setTimeout(function() {
		document.querySelector('.container').style.visibility = 'visible'
		document.querySelector('.preloader').style.visibility = 'hidden'
	}, 1000)
}
</script>

<style>

:root {
	--gradient: linear-gradient(135deg, #761adf 10%, #21dddd 100%);
}

* {
	-webkit-box-sizing: border-box;
	box-sizing: border-box;
	line-height: 1.25em;
}

.clear {
	clear: both;
}

body {
	margin: 0;
	width: 100%;
	height: 100vh;
	font-family: 'Quicksand', 'Source Sans Pro', -apple-system,
		BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial,
		sans-serif;
	background-color: #e5f3fe;
	display: -webkit-box;
	display: -ms-flexbox;
	display: flex;
	-webkit-box-align: center;
	-ms-flex-align: center;
	align-items: center;
	-webkit-box-pack: center;
	-ms-flex-pack: center;
	justify-content: center;
}

.container {
	visibility: hidden;
	display: flex;
	flex-direction: row;
	border-radius: 25px;
	box-shadow: 5px 5px 10px #cee3f2, -5px -5px 10px #faffff;
	/* -webkit-box-shadow: 0 0 70px -10px rgba(0, 0, 0, 0.2);
	        box-shadow: 0 0 70px -10px rgba(0, 0, 0, 0.2); */
	/* background-color: #222831; */
	color: #4d5871;
	height: 400px;
}

.weather-side {
	color: #fff;
	height: 100%;
	border-radius: 25px;
	width: 300px;
	-webkit-box-shadow: 0 0 20px -10px rgba(0, 0, 0, 0.2);
	box-shadow: 0 0 20px -10px rgba(0, 0, 0, 0.2);
	-webkit-transition: -webkit-transform 300ms ease;
	transition: -webkit-transform 300ms ease;
	-o-transition: transform 300ms ease;
	transition: transform 300ms ease;
	transition: transform 300ms ease, -webkit-transform 300ms ease;
	-webkit-transform: translateZ(0) scale(1.02) perspective(1000px);
	transform: translateZ(0) scale(1.02) perspective(1000px);
}

.weather-side:hover {
	-webkit-transform: scale(1.1) perspective(1500px) rotateY(15deg);
	transform: scale(1.1) perspective(2000px) rotateY(15deg);
}

.weather-gradient {
	width: 100%;
	height: 100%;
	top: 0;
	left: 0;
	background-image: var(--gradient);
	background: #6b7ffb;
	border-radius: 25px;
	opacity: 0.8;
}

.date-container {
	display: flex;
	flex-direction: column;
	position: absolute;
	top: 25px;
	left: 25px;
}

.date-dayname {
	margin: 0;
}

.date-day {
	display: block;
}

.location {
	display: inline-block;
	margin-top: 10px;
}

.location-icon {
	display: inline-block;
	height: 0.8em;
	width: auto;
	margin-right: 5px;
}

.weather-container {
	display: flex;
	flex-direction: column;
	position: absolute;
	bottom: 25px;
	left: 25px;
}

.weather-icon {
	height: 100px;
	font-size: 100px;
	width: auto;
}

.weather-temp {
	margin: 0;
	font-weight: 700;
	font-size: 4em;
}

.weather-desc {
	margin: 0;
}

.info-side {
	float: left;
	height: 100%;
	padding-top: 17px;
}

.today-info {
	padding: 15px;
	margin: 0 25px 25px 25px;
	/* 	box-shadow: 0 0 50px -5px rgba(0, 0, 0, 0.25); */
	border-radius: 10px;
}

.today-info > div:not(:last-child) {
	margin: 0 0 10px 0;
}

.today-info > div .title {
	float: left;
	font-weight: 700;
}

.today-info > div .title .feather{
	height: 14px;
	width: 14px;
	vertical-align: middle;
	margin-right: 5px;
}

.today-info > div .value {
	float: right;
}

.week-list {
	list-style-type: none;
	padding: 0;
	margin: 5px 35px;
	/* -webkit-box-shadow: 0 0 50px -5px rgba(0, 0, 0, 0.25);
	        box-shadow: 0 0 50px -5px rgba(0, 0, 0, 0.25); */
	box-shadow: 5px 5px 10px #cee3f2, -5px -5px 10px #faffff;
	border-radius: 10px;
}

.week-list > li {
	float: left;
	padding: 15px;
	cursor: pointer;
	-webkit-transition: 200ms ease;
	-o-transition: 200ms ease;
	transition: 200ms ease;
	border-radius: 10px;
}

.week-list > li:hover {
	-webkit-transform: scale(1.05);
	-ms-transform: scale(1.05);
	transform: scale(1.05);
	background: #fff;
	color: #222831;
	box-shadow: inset 3px 3px 7px rgba(136, 165, 191, 0.48),
		inset -3px -3px 7px #ffffff;
}

.week-list > li.active {
	background: rgba(255, 255, 255, 0.5);
	color: #222831;
	border-radius: 10px;
	box-shadow: inset 3px 3px 7px rgba(136, 165, 191, 0.48),
		inset -3px -3px 7px #ffffff;
}

.week-list > li .day-name {
	display: block;
	margin: 10px 0 0 0;
	text-align: center;
}

.week-list > li .day-icon {
	text-align: center;
	display: block;
	font-size: 24px;
	height: 30px;
	width: auto;
	margin: 0 auto;
}

.week-list > li .day-temp {
	display: block;
	text-align: center;
	margin: 10px 0 0 0;
	font-weight: 700;
}

.location-container {
	padding: 10px 35px;
}

.location-button {
	visibility: hidden;
	transition: 0.3s;
	outline: none;
	width: 100%;
	-webkit-box-sizing: border-box;
	box-sizing: border-box;
	border: none;
	border-radius: 25px;
	padding: 10px;
	font-family: 'Montserrat', sans-serif;
	background: #6b7ffb;
	color: #ffffff;
	font-weight: 700;
	-webkit-box-shadow: 0 0 30px -5px rgba(0, 0, 0, 0.25);
	box-shadow: 0 0 30px -5px rgba(0, 0, 0, 0.25);
	cursor: pointer;
	-webkit-transition: -webkit-transform 200ms ease;
	transition: -webkit-transform 200ms ease;
	-o-transition: transform 200ms ease;
	transition: transform 200ms ease;
	transition: transform 200ms ease, -webkit-transform 200ms ease;
}

.location-button:hover {
	-webkit-transform: scale(0.95);
	-ms-transform: scale(0.95);
	transform: scale(0.95);
}

.location-button .feather {
	height: 1em;
	width: auto;
	margin-right: 5px;
}

i img {
	width: 45px;
	display: block;
}

.week-list i {
	font-size: 25px;
	display: inline;
	margin: 0 8px;
	font-weight: bold;
}

.week-list i::before {
	font-size: inherit;
	margin: inherit;
}

.weather-container i {
	display: inline;
	margin: 0;
	font-size: 100px;
}

.weather-container i::before {
	font-size: inherit;
	margin: inherit;
}

.max .week {
	text-align: center;
	font-size: 12px;
	margin: 0 auto;
}

@media all and (max-width: 768px) {
	.container {
		background: none;
		display: flex;
		flex-direction: column;
		font-size: 0.9rem;
		justify-content: center;
		align-items: center;
		align-content: center;
	}

	.info-side {
		background: rgba(0, 0, 0, 0);
	}

	.weather-side {
		display: flex;
		flex-direction: column;
		justify-content: center;
		margin: 0 auto;
		text-align: center;
		box-shadow: none;
		color: #4f5770;
	}

	.weather-container i {
		margin-right: 5px;
	}

	.weather-container i::before {
		margin: inherit;
	}

	.weather-container {
		display: flex;
		flex-direction: row;
		align-items: center;
		text-align: center;
		font-size: 0.8rem;
		font-weight: normal;
		bottom: -20px;
	}

	.weather-desc {
		display: flex;
		flex-direction: column;
	}

	h1,
	h2,
	h3,
	h4 {
		font-weight: normal;
	}

	.weather-temp {
		display: inline-block;
		line-height: normal;
	}

	.weather-desc {
		display: inline-block;
	}

	.weather-container:hover {
		transition: none;
		transform: none;
	}

	.week-list li {
		padding: 8px;
	}

	.week-list i {
		margin: 0 5px;
	}

	.date-container {
		margin: 5px;
		margin-top: -10vh;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		top: 0;
		left: 0;
		text-align: center;
	}

	.date-dayname {
		margin-right: 10px;
	}

	.location {
		margin: 0;
	}

	.day-name {
		margin: 10px;
	}

	.weather-side i {
		font-size: 30px;
	}

	.date-container,
	.date-dayname {
		display: flex;
		flex-direction: row;
	}

	.weather-gradient {
		display: none;
	}

	.weather-temp {
		margin: 0 10px 0 0;
		font-size: 1rem;
	}
}

@media all and (max-width: 320px) {
	.container {
		height: auto;
		margin-top: 60px;
	}

	.date-container {
		margin: 0;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		top: -86px;
		left: 35px;
		text-align: left;
		line-height: normal;
	}

	.location-icon {
		display: inline-block;
		height: 0.1em;
		width: auto;
		margin-right: 5px;
	}

	.weather-container {
		position: static;
		margin: 20px 10px 0 37px;
	}

	.info-side {
		float: left;
		height: 100%;
		padding-top: 5px;
	}

	.date-dayname {
		font-weight: bold;
	}
}

/* Preloader */

.preloader {
	position: absolute;
	margin-left: -55px;
	margin-top: -100px;
	left: 50%;
	top: 50%;
}

svg {
	width: 110px;
	height: 110px;
}

path {
	stroke: #9ea1a4;
	stroke-width: 0.25;
	fill: #241e20;
}

#cloud {
	position: relative;
	z-index: 2;
}

#cloud path {
	fill: #efefef;
}

#sun {
	margin-left: -10px;
	margin-top: 6px;
	opacity: 0;
	width: 60px;
	height: 60px;
	position: absolute;
	left: 45px;
	top: 15px;
	z-index: 1;
	animation-name: rotate;
	animation-duration: 16000ms;
	animation-iteration-count: infinite;
	animation-timing-function: linear;
}

#sun path {
	stroke-width: 0.18;
	fill: #9ea1a4;
}

@keyframes rotate {
	0% {
		transform: rotateZ(0deg);
	}

	100% {
		transform: rotateZ(360deg);
	}
}

/* Rain */
.rain {
	position: absolute;
	width: 70px;
	height: 70px;
	margin-top: -32px;
	margin-left: 19px;
}

.drop {
	opacity: 1;
	background: #9ea1a4;
	display: block;
	float: left;
	width: 3px;
	height: 10px;
	margin-left: 4px;
	border-radius: 0px 0px 6px 6px;
	animation-name: drop;
	animation-duration: 350ms;
	animation-iteration-count: infinite;
}

.drop:nth-child(1) {
	animation-delay: -130ms;
}

.drop:nth-child(2) {
	animation-delay: -240ms;
}

.drop:nth-child(3) {
	animation-delay: -390ms;
}

.drop:nth-child(4) {
	animation-delay: -525ms;
}

.drop:nth-child(5) {
	animation-delay: -640ms;
}

.drop:nth-child(6) {
	animation-delay: -790ms;
}

.drop:nth-child(7) {
	animation-delay: -900ms;
}

.drop:nth-child(8) {
	animation-delay: -1050ms;
}

.drop:nth-child(9) {
	animation-delay: -1130ms;
}

.drop:nth-child(10) {
	animation-delay: -1300ms;
}

@keyframes drop {
	50% {
		height: 45px;
		opacity: 0;
	}

	51% {
		opacity: 0;
	}

	100% {
		height: 1px;
		opacity: 0;
	}
}

.text {
	font-family: Helvetica, 'Helvetica Neue', sans-serif;
	letter-spacing: 1px;
	text-align: center;
	margin-left: -43px;
	font-weight: bold;
	margin-top: 20px;
	font-size: 11px;
	color: #a0a0a0;
	width: 200px;
}

a {
	color: #ffffff;
}

.wrapper {
	display: flex;
	flex-direction: column;
}

.link {
	text-align: center;
	margin: 20px;
	font-size: 15px;
	visibility: hidden;
	color: #222831;
}

@media all and (max-width: 320px) {
	.link {
		display: none;
	}
}
</style>
