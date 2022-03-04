export const isDismissed = () => {
    const value = sessionStorage.getItem('antiWarMessageDismissed');
    return value === 'true';
}

export const setDismissed = () => {
    sessionStorage.setItem('antiWarMessageDismissed', 'true');
    const value = sessionStorage.getItem('antiWarMessageDismissed');
}