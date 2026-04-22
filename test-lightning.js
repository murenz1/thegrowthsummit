try {
  const lightningcss = require('lightningcss-win32-x64-msvc');
  console.log('Successfully required lightningcss-win32-x64-msvc');
  console.log(Object.keys(lightningcss));
} catch (e) {
  console.error('Failed to require lightningcss-win32-x64-msvc');
  console.error(e);
}
