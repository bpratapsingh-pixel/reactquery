export default async function FullPhotoPage({ params }) {
  const { id } = await params; // ⬅️ FIX: unwrap params

  return (
    <div style={{ padding: 20 }}>
      <h1>Full Photo Page</h1>
      <p>You are seeing the full page for photo {id}</p>
    </div>
  );
}
