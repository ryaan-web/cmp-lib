export const getCroppedUrl = (url, width, height, factor = 2) => {
  const fWidth = width * factor;
  const fHeight = height * factor;
  const hasParams = url.indexOf("?") >= 0;
  const cropParam = `fit=around|${fWidth}:${fHeight}&crop=${fWidth}:${fHeight};*,*`;
  return hasParams ? `${url}&${cropParam}` : `${url}?${cropParam}`;
};
