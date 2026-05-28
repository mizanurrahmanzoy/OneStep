export default function SettingsPage() {

  return (
    <div className="bg-white rounded-3xl p-8 border border-gray-200">

      <h1 className="text-3xl font-bold mb-8">
        Account Settings
      </h1>

      <div className="space-y-5">

        <button className="w-full border rounded-2xl p-4 text-left hover:bg-gray-50 transition">
          Change Password
        </button>

        <button className="w-full border rounded-2xl p-4 text-left hover:bg-gray-50 transition">
          Notification Settings
        </button>

        <button className="w-full border rounded-2xl p-4 text-left text-red-500 hover:bg-red-50 transition">
          Delete Account
        </button>

      </div>

    </div>
  );
}