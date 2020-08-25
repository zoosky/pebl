# This file is responsible for configuring your application
# and its dependencies with the aid of the Mix.Config module.
#
# This configuration file is loaded before any dependency and
# is restricted to this project.

# General application configuration
use Mix.Config

config :pebl,
  ecto_repos: [Pebl.Repo]

# Configures the endpoint
config :pebl, PeblWeb.Endpoint,
  url: [host: "localhost"],
  secret_key_base: "v9DbrpRjBgn3KhpN9+PHj0Xq9nptbdTGU4byHlKHDhaxToQ06iV01hgUF6A4Us8q",
  render_errors: [view: PeblWeb.ErrorView, accepts: ~w(html json)],
  pubsub: [name: Pebl.PubSub, adapter: Phoenix.PubSub.PG2]

# Configures Elixir's Logger
config :logger, :console,
  format: "$time $metadata[$level] $message\n",
  metadata: [:request_id]

# Use Jason for JSON parsing in Phoenix
config :phoenix, :json_library, Jason


config :pebl, :pow,
  user: Pebl.Users.User,
  repo: Pebl.Repo,
  web_module: PeblWeb

# Import environment specific config. This must remain at the bottom
# of this file so it overrides the configuration defined above.
import_config "#{Mix.env()}.exs"
