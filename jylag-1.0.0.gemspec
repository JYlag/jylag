# frozen_string_literal: true

Gem::Specification.new do |spec|
  spec.name          = "jylag-1.0.0"
  spec.version       = "0.1.0"
  spec.authors       = ["JYlag"]
  spec.email         = ["joeylagan@gmail.com"]

  spec.summary       = "Welcome to the beginning of the of your life"
  spec.homepage      = "https://github.com/JYlag/jylag"
  spec.license       = "MIT"

  spec.files         = `git ls-files -z`.split("\x0").select { |f| f.match(%r!^(assets|_layouts|_includes|_sass|LICENSE|README)!i) }

  spec.add_runtime_dependency "jekyll", "~> 3.8"

  spec.add_development_dependency "bundler", "~> 1.16"
  spec.add_development_dependency "rake", "~> 12.0"
end
