/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable import/no-default-export */
import { Meta, StoryObj } from '@storybook/vue3';
import MkToast from './MkToast.vue';
const meta = {
	title: 'components/MkToast',
	component: MkToast,
} satisfies Meta<typeof MkToast>;
export const Default = {
	render(args, { argTypes }) {
		return {
			components: {
				MkToast,
			},
			props: Object.keys(argTypes),
			template: '<MkToast v-bind="$props" />',
		};
	},
	parameters: {
		layout: 'centered',
	},
} satisfies StoryObj<typeof MkToast>;
export default meta;
