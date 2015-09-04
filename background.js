/**
 * Created by Mak-Di on 03.09.15.
 */

var config = {
    mode: "pac_script",
    pacScript: {
        data: "function FindProxyForURL(url, host) {\n" +
        "  if (host == 'example.com')\n" +
        "    return 'SOCKS5 127.0.0.1:8080';\n" +
        "  return 'DIRECT';\n" +
        "}"
    }
};
chrome.proxy.settings.set(
    {value: config, scope: 'regular'},
    function() {});


