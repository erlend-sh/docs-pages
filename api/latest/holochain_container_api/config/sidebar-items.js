initSidebarItems({"enum":[["InterfaceDriver",""],["StorageConfiguration","This configures the Content Addressable Storage (CAS) that the instance uses to store source chain and DHT shard in. There are two storage implementations in cas_implementations so far: * memory * file"]],"fn":[["load_configuration","Use this function to load a `Configuration` from a string."]],"struct":[["AgentConfiguration","An agent has a name/ID and is defined by a private key that resides in a file"],["Bridge","A bridge enables an instance to call zome functions of another instance. It is basically an internal interface."],["Configuration","Main container configuration struct This is the root of the configuration tree / aggregates all other configuration aspects."],["DNAConfiguration","A DNA is represented by a DNA file. A hash has to be provided for sanity check."],["InstanceConfiguration","An instance combines a DNA with an agent. Each instance has its own network, storage and logger configuration."],["InstanceReferenceConfiguration",""],["InterfaceConfiguration","Here, interfaces are user facing and make available zome functions to GUIs, browser based web UIs, local native UIs, other local applications and scripts. None is implemented yet, but we will have: * websockets * HTTP REST * Unix domain sockets very soon."],["LoggerConfiguration","There might be different kinds of loggers in the future. Currently there is no logger at all. TODO: make this an enum when it's actually in use"]]});