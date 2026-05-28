export default function OrdersPage() {

  return (
    <div className="bg-white rounded-3xl p-8 border border-gray-200">

      <h1 className="text-3xl font-bold mb-8">
        My Orders
      </h1>

      <div className="space-y-5">

        {[1, 2, 3].map((order) => (

          <div
            key={order}
            className="border rounded-2xl p-5 flex items-center justify-between"
          >

            <div>

              <h3 className="font-bold">
                Order #{1000 + order}
              </h3>

              <p className="text-gray-500 mt-1">
                2 Products
              </p>

            </div>

            <div className="text-right">

              <p className="font-bold text-blue-600">
                ৳ 2500
              </p>

              <p className="text-sm text-green-600 mt-1">
                Delivered
              </p>

            </div>

          </div>

        ))}

      </div>

    </div>
  );
}