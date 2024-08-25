/*
JS:
{
Single Threaded
Synchronous
} Default
JS engine alone will be slow but we don't fine js engine alone anywhere
we find it in a runtime env ex: browser or NodeJs


execution context :
Execute one line at a time.
each operation wait for the last one to combine before executing

CALL STACK & MEMORY HEAP is used


Blocking Code : blocks flow of program : readFileSync
Non BLocking COde : Doest not block execution : readFileAsync

blocking code is also necessary:
as when you take user data and register in the db
you send user confirmation as SUCCESSFUL without getting response from the db 
then what if you get error msg from db that it failed and u already sent success msg to the user.


*/
