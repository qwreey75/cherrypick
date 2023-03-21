/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable import/no-default-export */
import { Meta, StoryObj } from '@storybook/vue3';
import MkSwitch from './MkSwitch.vue';
const meta = {
	title: 'components/MkSwitch',
	component: MkSwitch,
} satisfies Meta<typeof MkSwitch>;
export const Default = {
	render(args, { argTypes }) {
		return {
			components: {
				MkSwitch,
			},
			props: Object.keys(argTypes),
			template: '<MkSwitch v-bind="$props" />',
		};
	},
	parameters: {
		layout: 'centered',
	},
} satisfies StoryObj<typeof MkSwitch>;
export default meta;
