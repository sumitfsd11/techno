
export const isPublicApi = (url) => {
    const publicApiArray = ["/api/login/", "/api/register/"];
    return Boolean(publicApiArray.filter((e) => url?.includes(e))?.length);
};

export const asyncWrapper = (promise) =>
    promise.then((data) => ({ data, error: null }))
        .catch((error) => ({ data: null, error }));
