import { type MotionDivProps, makeAnimated } from "@utils/index";

const animatedDefaultCard: MotionDivProps = {
	layout: false,
	//
	variants: {
		hidden: { opacity: 0, x: 15, y: 15, scale: 0.99 },
		visible: { opacity: 1, x: 0, y: 0, scale: 1, transition: { duration: 0.5 } },
	},
};

const AnimatedDefaultCard = makeAnimated(animatedDefaultCard);

export { AnimatedDefaultCard };
