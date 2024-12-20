import React from "react";
import { HashLink as Link } from "react-router-hash-link";

const Cybersecurity = () => {
    return (
        <section id="cybernotes" className="notes">
            <h2>Cyber Security</h2>
            <h1>Chapter 1</h1>
            <h1>What We Will Cover:</h1>
            <p>
                &emsp; &emsp;- Networks<br/>
                &emsp; &emsp;- Network Principles<br/>
                &emsp; &emsp;- Network Design<br/>
                &emsp; &emsp;- Implementation<br/>
                &emsp; &emsp;&emsp; &emsp; &#x25B8; Common Protocols<br/>
                &emsp; &emsp;- Identify<br/>
                &emsp; &emsp;&emsp; &emsp; &#x25B8; Common Ports<br/>
                &emsp; &emsp;&emsp; &emsp; &emsp; &emsp; &#x25AA; HTTP, HTTPS, FTP<br/>
                &emsp; &emsp;- Wireless Network Security<br/>
                &emsp; &emsp;&emsp; &emsp; &#x25B8; Encryption<br/>
                &emsp; &emsp;&emsp; &emsp; &#x25B8; SSIDS<br/>
            </p>
            <h1>Security Function and Purpose of Network Devices and Technology</h1>
            <h1>Firewalls</h1>
            <div className="text-paragraph">
                <p>
                    Firewalls are the first line of defense. Additionally, network administrators are likely to
                    download this device first to prevent malicious attacks. They are network based (host based)
                    devices that work by comparing (inspecting) incoming or outgoing traffic. They can allow or 
                    deny network traffic on a set of rules. This is a powerful form of access control. <br/> <br/>

                    Firewall rules are the mechanism by which the firewall blocks or permits traffic. Rules can be
                    based  onf four different traffic components; ports, protocol, address, or direction of the
                    traffic (inbound or outbound). For example, if you want to block a program from connecting over
                    the internet, such as Telnet, you can create a rule that blocks Telnet.exe or port 23 (Telnet uses
                    that port). If you want to block remote access you would create a rule that block port 1433, which
                    is commonly used for Microsoft SQL.<br/><br/>

                    Firewalls can be software or hardware. Often, individual compiters have software based firewalls,
                    while companies deploy hardware based firewalls for network protection, ease of administration, and
                    single point of entry. Software based firewalls are commanly known as "Host-based firewalls".
                </p>
            </div>
            <h1>Routers</h1>
            <div className="text-paragraph">
                <p>
                    Routers forward traffic between networks using an internal routing mechanism called a routing table
                    (stored on the router) and the packet header (contains the ip address information for the
                    intended recipient). Simply, the router works by reading the information in the packet header of
                    the data, consulting its routing table to find the recipient, then sending it on its way.<br/><br/>

                    Hardware-wise, a router is a smart device that is capable of understanding the packets that pass through
                    it. Some devices like "hubs" are "dumb" devices that are unaware that packets are traveling through them. 
                    Other devices, such as "switches" are smart devices although they perform slightly different functions.
                </p>
            </div>
            <h1>Switches</h1>
            <div className="text-paragraph">
                <p>
                    Switches are another type of network component, commonly confused with routers. The difference between 
                    routers and switches is that routers connect to different networks, while switches connect to computers
                    within a network. Hubs are the "dumb" version of switches. A switch can be used as traffic control and forward
                    certain packets to select individuals.<br/><br/>

                    To secure a switch and to ensure it is not accessed physically, you should disable the unused ports. Becareful
                    you are not disabling the port you configure with.
                </p>
            </div>
            <h1>Load Balancers</h1>
            <div className="text-paragraph">
                <p>
                    Often it is vital for a computer system to be able to handle the traffic of many users accessing servers
                    at once. If a system cannot hangle the amount of traffic, it will deny users accessm provide slow service, or 
                    even crash. This is where load balancers come in.<br/><br/>

                    They distribute traffic across multiple systems to provide redundancy. This is especially important in case of
                    web servers that host popular websites, where traffic can spike during massice sales or even attacks. <br/><br/>

                    Load balancers are ususally found in server clusters where software provides the load balancing service. But, it
                    can be hardware based as well, as in the form of multilayer switches.
                </p>
            </div>
            <h1>Proxies (Proxy Server)</h1>
            <div className="text-paragraph">
                <p>
                    Proxy servers are used mainly as an intermediary to provide web proxy services. What does that mean? When users
                    browse the internet, they request web apges through a proxy server (it is a "go-between" the users' computer 
                    and the internet) and the proxy server checks its filtering rules to ensure the user is able to acces the resource.
                    Then, if the user has sufficient permissions, the procy delivers the pafe or content. This is a method of filtering
                    and access control. <br/><br/>

                    Computers using procy servers are anonymous. Open proxies allow any user to connect to it over the internet and thus
                    make requests through it (browse anonymously).
                </p>
            </div>
            <h1>Web Security Gateways</h1>
            <div className="text-paragraph">
                <p>
                    Proxy servers typically filter URLs that users access over the internet, it is also important to consider the potential
                    security risks by content being delivered from those websites.<br/><br/>

                    Web security gateways, or secure web gateways, help prevent malware attacks from those websites. Why do I need a web security
                    gateway when I have anti-virus and a proxy server? Well, the problem with relying on anti-virus products and proxy servers 
                    against web-based threats is three-fold:<br/><br/>

                    &emsp;1. Anti-virus products update their definitions on a cycle, usually daily, which does not guarantee protection
                    from real time threats.<br/>
                    &emsp;2. Trusted websites can be exposed and converted into "drive-by" malware depositories at any time.<br/>
                    &emsp;3. Some web pafes can include dynamic content to bypass website categorization (filtering) and present users with unwanted
                    content.<br/><br/>

                    Web security gateways content filter in real-time scanning for both inbound and outbound traffic. Thus, when users visit a
                    website, create secure connections (SSL), or encounter dynamic content on the internet, such as user-generated content on
                    social networking sites, isers' ocomputers and data are always protected against potential threats.
                </p>
            </div>
            <h1>VPN Concentrators</h1>
            <div className="text-paragraph">
                <p>
                    When users need to connecet to corporate resources while away from the office, companies may find it useful to employ VPN concentrators,
                    or VPN gateways. These devices allow remote users to create an encrypted connection to the office that safely transmits data.
                    The link can function regardless of physical location, and protects data even if it travels through unsecured public networks. The
                    encrypted links require no special equipment for the remote client. As these connections are virtual, rather than physical, the
                    connections are known as Virtual Private Network (VPN) connections.<br/><br/>

                    VPN concentrators are network appliances that provide multiple secure connection points for remote users. The device is exposed to
                    the internet using one port (443 Telnet) and supports multiple concurrent VPN connections, usually 25+, up to 500 users each (approximately),
                    depending on the hardware. While connected to a VPN the user can access their companies resources without sensitive information being leaked
                    to the internet.<br/><br/>

                    VPN concentrators usually support authentication mechanisms, such as Active Directory, LDAP, and RADIUS, and provide database support.
                </p>
            </div>
            <h1>NIDS and NIPS</h1>
            <div className="text-paragraph">
                <p>
                    It is vital to catch attacks and stop them before they can do major damage. Thus, many companies use NIDS (Network Intrusion Detection 
                    Systems) and NIPS (Network Intrusion Prevention Systems).<br/><br/>

                    NIDS are responsible for detecting network-based attacks, alerting administrators to said attacks, it examines traffic. Such attacks can
                    occue in the form of port scanning, packet flooding, etc. There are two forms of NIDS:<br/><br/>
                    &emsp;1. Anomaly-based.<br/>
                    &emsp;&emsp;-Monitor network traffic and detect whether certain traffic patterns fall outside the acceoted limits.<br/>
                    &emsp;2. Signature-based.<br/>
                    &emsp;&emsp;-Compare network traffic with known "signatures" (patterns) and analyze it to determine whther there are any recognized attacks
                    occurring.<br/><br/>
                    All forms of NIDS log information about anomalous network activities. Some important distinctions are:<br/><br/>
                    &emsp;- NIPS provide all the same services as NIDS, but also stop attempts to stop an attack from happening.<br/>
                    &emsp;- NIDS and NIPS can come in either software or hardware forms.<br/>
                    &emsp;- NIDS are not the same as HIDS (Host-based Intrusion Detection Systems).
                </p>
            </div>
            <h1>Protocol Analyzers</h1>
            <div className="text-paragraph">
                <p>
                    Administrators sometimes find it necessary to intercept traffic en route and review it for potential attacks, protocol analyzers 
                    allow this. Protocol analyzers can be software or hardware based, and they intercept, decode, and analyze network packet
                    information, such as IP address. Protocol analuzers help detect network intrusions and internet and network abuse, and log 
                    traffic information for later use.<br/><br/>

                    Protocol Analyzers are also called Packet Sniffers.
                </p>
            </div>
            <h1>Spam Filters</h1>
            <div className="text-paragraph">
                <p>
                    E-mail is a crucial function of a corporation, and spam e-mails are a waste of time and productivity, and may contain threats.
                    Spam filters can help cut down the amount of junk e-mails and malware infesting company mailboxes.<br/><br/>

                    Spam filters are doftware-based and they operate by analyzing e-mail messages for specific data that indicates unwanted mail. Such
                    indicators include:<br/><br/>
                    &emsp;- Suspicious subject lines.<br/>
                    &emsp;- Suspicious image content.<br/>
                    &emsp;- Common phrases indicative of advertisements<br/>
                    &emsp;- E-mail messages originating from blacklisted domains or suspicious senders.<br/>
                    &emsp;- Multiple e-mail messages from the same origin, or with the same content, indicating a malware infection.<br/><br/>
                    Spam filters can remove an e-mail entirely or replace its contents, depending on its configuration. A balance must be carefully 
                    determined between affressive filtering and ensuring that minimum false positives occur.
                </p>
            </div>
            <h1>Web Application Firewalls</h1>
            <div className="text-paragraph">
                <p>
                    Many companies have web-facing applications that can present vulnerabilities if not pregrammed or configured correctly. Web application
                    firewalls (WAFs) help assist mitigating this issue. WAFs differ from regular network firewalls in that WAFs monitor network traffic 
                    and apply firewall rules to HTTP traffic (where network firewalls control many types of traffic) to help prevent attacks suct as 
                    cross-site scripting and SQL injections.  
                </p>
            </div>
            <h1>URL Filtering</h1>
            <div className="text-paragraph">
                <p>
                    When administrators need to control the websites users visit while on company computers, they can implement URL filtering. URL filtering 
                    is either software or hardware based. It is usually performed at a proxy server (see Proxies section).
                </p>
            </div>
            <h1>Content Filtering</h1>
            <div className="text-paragraph">
                <p>
                    Content filtering is mainly a component of e-mail and web security on any network. When filtering e-mail, specifically using spam filers, 
                    content filtering is the most common type. Content filters can use the following e-mail field and information to identify spam:
                    &emsp;- Mail header (Subject line)<br/>
                    &emsp;- Body<br/>
                    Web content filtering is used to keep users from viewing inappropriate content or sites, thus improving productivity and computer security. 
                    Web content filtering is software-based, usually implemented on proxy servers.
                </p>
            </div>
            <h1>Content Inspection</h1>
            <div className="text-paragraph">
                <p>
                    Similar to content filtering, content inspection examines information and determines its suitability according to preset rules or 
                    sigatures. However, content inspection can analyze files and attachments and determine whether they are malicious, rather than block files
                    due to simple rules (i.e file type).<br/><br/>
                    &emsp;- Web security gateways.<br/>
                    &emsp;- Proxy servers with anti-virus.<br/>
                    &emsp;- Firewalls.<br/>
                </p>
            </div>
        </section>
    );
}

export default Cybersecurity;