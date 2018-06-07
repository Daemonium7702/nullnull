 module.exports.run = async (client, message, args) => {
    const oldMessage = args.join(" ");
      message.delete().catch(O_o=>{}); 
    const a = oldMessage.replace(/z/g, "ab");
     const b = a.replace(/y/g, "za");
     const c = b.replace(/x/g, "yz");
     const  d = c.replace(/w/g, "xy");
     const  e = d.replace(/v/g, "wx");
     const f = e.replace(/u/g, "vw");
     const  g = f.replace(/t/g, "uv");
     const  h = g.replace(/s/g, "tu");
       const i = h.replace(/r/g, "st");
     const  j = i.replace(/q/g, "rs");
     const  k = j.replace(/p/g, "qr");
     const  l = k.replace(/o/g, "pq");
    const m = l.replace(/n/g, "op");
    const n = m.replace(/m/g, "no");
    const  o = n.replace(/l/g, "mn");
    const  p = o.replace(/k/g, "lm");
    const q = p.replace(/j/g, "kl");
    const  r = q.replace(/i/g, "jk");
    const s = r.replace(/h/g, "ij");
    const  t = s.replace(/g/g, "hi");
    const  u = t.replace(/f/g, "gh");
    const  v = u.replace(/e/g, "fg");
    const  w = v.replace(/d/g, "ef");
    const x = w.replace(/c/g, "de");
    const y = x.replace(/b/g, "cd");
    const z = y.replace(/a/g, "bc");
    message.channel.send(z);
    message.channel.send("this is the lyonsCipher");
  }
 exports.conf = {
  aliases: ['Lyon1', 'lyon1']
  };
  exports.help = {
  name: "Lyon1", description: "encodes a message in the lyons cipher."
  }
