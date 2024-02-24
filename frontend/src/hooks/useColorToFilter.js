
const useColorToFilter=() => {
    const getColorToFilter=(color) => {
        switch(color) {
            case 'gray':
                return 'brightness(0.9)';
            case 'brown':
                return 'brightness(0.7) saturate(4000%) hue-rotate(200deg)';
            case 'orange':
                return 'brightness(0.9) saturate(5000%) hue-rotate(210deg)';
            case 'yellow':
                return 'brightness(0.95) saturate(6000%) hue-rotate(240deg)';
            case 'green':
                return 'brightness(0.9) saturate(5000%) hue-rotate(300deg)';
            case 'blue':
                return 'brightness(0.9) saturate(5000%) hue-rotate(60deg)';
            case 'purple':
                return 'brightness(0.9) saturate(5000%) hue-rotate(90deg)';
            case 'pink':
                return 'brightness(0.9) saturate(5000%) hue-rotate(120deg)';
            case 'red':
                return 'brightness(0.9) saturate(5000%) hue-rotate(180deg)';
            default:
                return '';
        }
    }
    return getColorToFilter
}

export default useColorToFilter