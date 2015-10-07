# brute-force-md5

An example of how to brute force a password hashed with MD5. The same example will work for any hashing algorithm, just switch out the hashing function.

If the password is salted, you can add the salt string to get the same result. If you do not have the salt string, it may still be possible to brute force, but you would have to brute force every possible salt string and run this script for each salt string.
