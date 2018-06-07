module.exports.run = async (client, message, args) => {
   const oldMessage = args.join(" ");
      message.delete().catch(O_o=>{}); 
    const a = oldMessage.replace(/y/g, "ab");
     const b = a.replace(/x/g, "za");
     const c = b.replace(/w/g, "yz");
     const  d = c.replace(/v/g, "xy");
     const  e = d.replace(/u/g, "wx");
     const f = e.replace(/t/g, "vw");
     const  g = f.replace(/s/g, "uv");
     const  h = g.replace(/r/g, "tu");
       const i = h.replace(/q/g, "st");
     const  j = i.replace(/p/g, "rs");
     const  k = j.replace(/o/g, "qr");
     const  l = k.replace(/n/g, "pq");
    const m = l.replace(/m/g, "op");
    const n = m.replace(/l/g, "no");
    const  o = n.replace(/k/g, "mn");
    const  p = o.replace(/j/g, "lm");
    const q = p.replace(/i/g, "kl");
    const  r = q.replace(/h/g, "jk");
    const s = r.replace(/g/g, "ij");
    const  t = s.replace(/f/g, "hi");
    const  u = t.replace(/e/g, "gh");
    const  v = u.replace(/d/g, "fg");
    const  w = v.replace(/c/g, "ef");
    const x = w.replace(/b/g, "de");
    const y = x.replace(/a/g, "cd");
    const z = y.replace(/z/g, "bc");
    message.channel.send(z);
    message.channel.send("this is the lyonsCipher V2.0");
 }
  exports.conf = {
  aliases: ['2noyl', '2Noyl']
  };
  exports.help = {
  name: "2noyl", description: "Lyons cipher v2.0."
  }
