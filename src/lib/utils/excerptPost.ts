export const excerptPostContent = (content: string, len: number = 70): string => {
	if (content.length > len) {
		content = content.slice(0, len) + '... ';
		return content;
	}
	return content;
};