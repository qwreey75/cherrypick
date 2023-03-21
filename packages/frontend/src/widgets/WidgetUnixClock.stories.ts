/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable import/no-default-export */
import { Meta, StoryObj } from '@storybook/vue3';
import WidgetUnixClock from './WidgetUnixClock.vue';
const meta = {
	title: 'widgets/WidgetUnixClock',
	component: WidgetUnixClock,
} satisfies Meta<typeof WidgetUnixClock>;
export const Default = {
	render(args, { argTypes }) {
		return {
			components: {
				WidgetUnixClock,
			},
			props: Object.keys(argTypes),
			template: '<WidgetUnixClock v-bind="$props" />',
		};
	},
	parameters: {
		layout: 'centered',
	},
} satisfies StoryObj<typeof WidgetUnixClock>;
export default meta;
