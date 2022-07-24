export interface Provider {
    callbackUrl: string;
    id: string;
    name: string;
    signinYrl: string;
    type: string;
}

export interface UserProps {
    className: null | string;
}

export interface searchProps {
    title: string;
    icon: JSX.Element;
    className: string;
}

export interface GoogleAboutRes {
    searchTime: string;
    totalResults: string;
}

export interface GoogleItemsRes {
    items: {
        kind: string;
        title: string;
        htmlTitle: string;
        link: string;
        displayLink: string;
        snippet: string;
        htmlSnippet: string;
        formattedUrl: string;
        htmlFormattedUrl: string;
    }[];
}

export interface GoogleItemsImgsRes {
    itemsImgs: {
        kind: string;
        title: string;
        htmlTitle: string;
        link: string;
        displayLink: string;
        snippet: string;
        htmlSnippet: string;
        mime: string;
        fileFormat: string;
        image: {
            contextLink: string;
            height: string;
            width: string;
            byteSize: string;
            thumbnailLink: string;
            thumbnailHeight: string;
            thumbnailWidth: string;
        };
    }[];
}
