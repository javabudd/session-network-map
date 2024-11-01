import {Theme} from "@aws-amplify/ui";

export const theme: Theme = {
	name: 'base-theme',
	primaryColor: 'blue',
	tokens: {
		colors: {
			background: {
				primary: 'linear-gradient(180deg, #757575, #ffffff);'
			},
			font: {
				primary: {value: '#4A4A4A'},
			},
			border: {
				primary: {value: '#0f0f0f0'}
			}
		},
		components: {
			tabs: {
				borderColor: {value: '{colors.neutral.20}'},
				item: {
					color: {value: '#030712DE'},
					fontSize: {value: '{fontSizes.lg}'},
					fontWeight: {value: '{fontWeights.bold}'},

					_hover: {
						color: {value: '{colors.blue.60}'},
					},
					_focus: {
						color: {value: '{colors.blue.60}'},
					},
					_active: {
						color: {value: 'rgb(4, 20, 73)'},
						borderColor: {value: 'rgb(4, 20, 73)'},
						backgroundColor: {value: 'rgb(228, 241, 249)'},
					},
					_disabled: {
						color: {value: 'gray'},
						backgroundColor: {value: 'transparent'},
					},
				},
			},
			card: {
				borderWidth: {value: '2px'},
				boxShadow: {value: '{shadows.small}'},
				borderColor: {value: '{colors.background.info}'},
				borderRadius: {value: '{radii.large}'},
				padding: {value: '{space.xl}'},
			},
			fieldcontrol: {
				_focus: {
					boxShadow: {value: '{shadows.medium}'},
				}
			},
			button: {
				_hover: {
					color: {value: 'rgb(4, 20, 73)'},
					borderColor: {value: 'rgb(4, 20, 73)'},
					backgroundColor: {value: 'rgb(228, 241, 249)'},
				},
				_focus: {
					color: {value: '{colors.blue.60}'},
					boxShadow: {value: 'none'}
				},
				_active: {
					color: {value: 'rgb(4, 20, 73)'},
					borderColor: {value: 'rgb(4, 20, 73)'},
					backgroundColor: {value: 'rgb(228, 241, 249)'},
				},
				_disabled: {
					color: {value: 'gray'},
					backgroundColor: {value: 'transparent'},
				},
			},
			loader: {
				linear: {
					strokeFilled: {value: '{colors.blue.60}'},
					strokeEmpty: {value: '{colors.neutral.20}'},
					animationDuration: {value: '2s'},
				},
			},
			menu: {
				backgroundColor: {value: 'rgb(228, 241, 249)'},
			},
			link: {
				hover: {color: '{colors.blue.80}'},
			},
			breadcrumbs: {
				separator: {
					color: {value: '{colors.blue.20}'},
					paddingInline: {value: 'space.small'},
				},
				link: {
					textDecoration: {value: 'none'},
					color: {value: '{colors.blue.60}'},
					fontWeight: 500,
					current: {
						fontWeight: 500
					},
				},
			},
		}
	},
};