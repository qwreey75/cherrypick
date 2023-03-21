/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable import/no-default-export */
import { Meta, StoryObj } from '@storybook/vue3';
import MkNoteSub from './MkNoteSub.vue';
const meta = {
	title: 'components/MkNoteSub',
	component: MkNoteSub,
} satisfies Meta<typeof MkNoteSub>;
export const Default = {
	render(args, { argTypes }) {
		return {
			components: {
				MkNoteSub,
			},
			props: Object.keys(argTypes),
			template: '<MkNoteSub v-bind="$props" />',
		};
	},
	parameters: {
		layout: 'centered',
	},
} satisfies StoryObj<typeof MkNoteSub>;
export default meta;
