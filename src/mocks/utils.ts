export const delay = (data: object, ms: number) => {
    return new Promise((res) => {
        setTimeout(() => res(data), ms);
    });
};
