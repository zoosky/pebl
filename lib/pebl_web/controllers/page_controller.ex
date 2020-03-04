defmodule PeblWeb.PageController do
  use PeblWeb, :controller

  def index(conn, _params) do
    render(conn, "index.html")
  end
end
