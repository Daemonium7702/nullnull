module.exports.run = (client, message, args) => {
message.delete().catch(O_o=>{}); 
    const oldMessage = args.join(" ");    
    const a = oldMessage.replace(/z/g, "//////");
     const b = a.replace(/y/g, "/////.....");
     const c = b.replace(/x/g, "/////....");
     const  d = c.replace(/w/g, "/////...");
     const  e = d.replace(/v/g, "/////..");
     const f = e.replace(/u/g, "/////.");
     const  g = f.replace(/t/g, "////.....");
     const  h = g.replace(/s/g, "////....");
       const i = h.replace(/r/g, "////...");
     const  j = i.replace(/q/g, "////..");
     const  k = j.replace(/p/g, "////.");
     const  l = k.replace(/o/g, "///.....");
    const m = l.replace(/n/g, "///....");
    const n = m.replace(/m/g, "///...");
    const  o = n.replace(/l/g, "///..");
    const  p = o.replace(/k/g, "///.");
    const q = p.replace(/j/g, "//.....");
    const  r = q.replace(/i/g, "//....");
    const s = r.replace(/h/g, "//...");
    const  t = s.replace(/g/g, "//..");
    const  u = t.replace(/f/g, "//.");
    const  v = u.replace(/e/g, "/.....");
    const  w = v.replace(/d/g, "/....");
    const x = w.replace(/c/g, "/...");
    const y = x.replace(/b/g, "/..");
    const z = y.replace(/a/g, "/.");
	 const zero = z.replace(/0/g, ".");
	  const one = zero.replace(/1/g, "./");
	  const two = one.replace(/2/g, ".//");
	  const three = two.replace(/3/g, ".///");
	  const four = three.replace(/4/g, ".////");
	  const five = four.replace(/5/g, "../");
	  const six = five.replace(/6/g, "..//");
	  const seven = six.replace(/7/g, "..///");
	  const eight = seven.replace(/8/g, "..////");
	  const nine = eight.replace(/9/g, "../////");
    const space = nine.replace(/ /g, "X");
    message.channel.send(space);
  }
    exports.conf = {
  aliases: ['Morseslyon', 'morseslyon']
  };
  exports.help = {
  name: "Morseslyon", description: "Encodes a message in morseslyon."
  }
