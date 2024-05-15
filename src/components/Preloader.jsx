
const Preloader = () => {
    return (
        <div className="flex items-center justify-center w-full min-h-screen">
            <div className="relative w-12 h-12 -translate-x-6 loader after:absolute after:w-full after:h-full after:rounded-full after:mix-blend-multiply after:bg-orangeRed before:absolute before:w-full before:h-full before:rounded-full before:mix-blend-multiply before:bg-orangeRed"></div>
        </div>
    );
};
export default Preloader
