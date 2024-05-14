import { useCallback, useEffect, useState } from "react";
export const usePreloader = () => {
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        setIsLoading(true);
        document.body.classList.add("overflow-hidden")
        setTimeout(() => {
            setIsLoading(false);
            document.body.classList.remove("overflow-hidden")
        }, 3500);
    }, []);
    return isLoading;
};
export const useOverflowHidden = () => {
    const [isOpen, setOpen] = useState(false);
    useEffect(() => {
        if (isOpen) {
            document.body.classList.add('overflow-hidden');
        } else {
            document.body.classList.remove('overflow-hidden');
        }
    }, [isOpen]);

    return [isOpen, setOpen];
}
export const useTabNavigation = (initialTab) => {
    const [activeTab, setActiveTab] = useState(initialTab);
    const handleTabClick = (index) => {
        setActiveTab(index);
    };
    return { activeTab, handleTabClick };
};
export const useSliderNavigation = (sliderRef) => {
    const handlePrev = useCallback(() => {
        if (!sliderRef.current) return;
        sliderRef.current.swiper.slidePrev();
    }, [sliderRef]);

    const handleNext = useCallback(() => {
        if (!sliderRef.current) return;
        sliderRef.current.swiper.slideNext();
    }, [sliderRef]);

    return { handlePrev, handleNext };
};