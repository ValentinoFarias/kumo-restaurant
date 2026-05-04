import { S3Client, ListObjectsCommand } from "@aws-sdk/client-s3";

const s3 = new S3Client({
  region: "auto",
  endpoint: `https://${process.env.CLOUDFLARE_R2_ACCOUNT_ID}.r2.cloudflarestorage.com`,
  credentials: {
    accessKeyId: process.env.CLOUDFLARE_R2_ACCESS_KEY,
    secretAccessKey: process.env.CLOUDFLARE_R2_SECRET_KEY,
  },
});

export default async function handler(req, res) {
  const params = {
    Bucket: process.env.CLOUDFLARE_R2_BUCKET,
    Prefix: "Menu/", // Folder path in your bucket
  };

  try {
    const data = await s3.send(new ListObjectsCommand(params));
    const images = data.Contents.map((item) => item.Key); // Extract image keys
    res.status(200).json({ images });
  } catch (err) {
    console.error("Error fetching images:", err);
    res.status(500).json({ error: "Failed to fetch images" });
  }
}