source "https://rubygems.org"

gem "rails", "~> 8.0.2"
gem "puma", ">= 5.0"
gem "bootsnap", require: false

gem "dotenv-rails", "~> 3.1", ">= 3.1.7"

# Old-fashioned rails asset pipeline
gem "sprockets-rails", "~> 3.5"

# The actively maintained version of webpacker
gem "shakapacker", "~> 8.2"

# Helpers for rendering components
gem "react-rails", "~> 3.2"

group :development, :test do
  gem "debug", platforms: %i[ mri windows ], require: "debug/prelude"
  gem "brakeman", require: false
  gem "rubocop-rails-omakase", require: false
end

group :development do
  gem "web-console"
end
