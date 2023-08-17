export interface PodcastContents {
    results: Results[],
}

export interface Results {
    artistName: string,
    trackName: string,
    'im:releaseDate': {},
    collectionName: string
    episodeUrl: string
}

export interface PodcastDetails {
    trackName: string,
    description: string,
    releaseDate: string,
    trackTimeMillis: number,
    artworkUrl600: string,
    episodeGuid: string,
    previewUrl: string,
    collectionId: string
}