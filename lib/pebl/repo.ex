defmodule Pebl.Repo do
  use Ecto.Repo,
    otp_app: :pebl,
    adapter: Ecto.Adapters.Postgres
end
