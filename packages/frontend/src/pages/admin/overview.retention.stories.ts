/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable import/no-default-export */
import { Meta, StoryObj } from '@storybook/vue3';
import overview_retention from './overview.retention.vue';
const meta = {
	title: 'pages/admin/overview.retention',
	component: overview_retention,
} satisfies Meta<typeof overview_retention>;
export const Default = {
	render(args, { argTypes }) {
		return {
			components: {
				overview_retention,
			},
			props: Object.keys(argTypes),
			template: '<overview_retention v-bind="$props" />',
		};
	},
	parameters: {
		layout: 'fullscreen',
	},
} satisfies StoryObj<typeof overview_retention>;
export default meta;
