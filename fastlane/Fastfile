# More documentation about how to customize your build
# can be found here:
# https://docs.fastlane.tools
fastlane_version "2.68.0"

# This value helps us track success metrics for Fastfiles
# we automatically generate. Feel free to remove this line
# once you get things running smoothly!
generated_fastfile_id "3216c283-8595-4518-899b-2914e2b8f56b"

default_platform :android

# Fastfile actions accept additional configuration, but
# don't worry, fastlane will prompt you for required
# info which you can add here later
lane :beta do
  # build the release variant
  build_android_app(task: "assembleRelease")

  # upload to HockeyApp
  hockey(
    # api_token: "YOUR_API_TOKEN"
  )
end
