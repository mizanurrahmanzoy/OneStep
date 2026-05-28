export default function AddressPage() {

  return (
    <div className="bg-white rounded-3xl p-8 border border-gray-200">

      <h1 className="text-3xl font-bold mb-8">
        Saved Address
      </h1>

      <textarea
        className="w-full border rounded-2xl p-5 outline-none"
        rows={5}
        placeholder="Add your delivery address"
      />

      <button className="mt-5 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-2xl transition">
        Save Address
      </button>

    </div>
  );
}