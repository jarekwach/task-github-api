export const decodeBase64 = (encodedText) => {
	const decoder = new TextDecoder('utf-8');
	const decodedData = Uint8Array.from(atob(encodedText), (c) =>
		c.charCodeAt(0)
	);
	const decodedText = decoder.decode(decodedData);

	return decodedText;
};
