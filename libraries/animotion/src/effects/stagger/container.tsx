import { type MotionDivProps, makeAnimated } from "@utils/index";
import { stagger } from "motion";

const staggerContainer: MotionDivProps = {
	layout: true,
	//
	initial: "hidden",
	animate: "visible",
	//
	variants: {
		hidden: {},
		visible: {
			transition: {
				delayChildren: stagger(0.1),
			},
		},
	},
};

const AnimatedStaggerContainer = makeAnimated(staggerContainer);

export { AnimatedStaggerContainer };
