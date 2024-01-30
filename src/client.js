import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url'

export const client = createClient({
    projectId: '06z2t0xz',
    apiVersion: '2023-09-19',
    useCdn: true,
    dataset: 'production',
    token: 'skhtDAstfM94etPIq7cmywDNenzo5XfLBvCLj1sYV9ZTxedhlId5IiOxiGg5KgiaTo4XzdYOXxIzLFKaV1yYS4Xk5FVx2PndcpKA4OyRrgIkR9kCoCEjImFNny76cQnTEy4WarmMhPKr1BwjmteKAogLLaoRGeLCzZooXSDDVUi4TbSG0Nwj',
})

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);