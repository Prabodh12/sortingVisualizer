function bubble(n){animation=[];for(var t=0;t<n.length-1;t++)for(var i=0;i<n.length-t-1;i++)if(animation.push([i,i+1]),animation.push([i,i+1]),n[i]>n[i+1]){var o=n[i];n[i]=n[i+1],n[i+1]=o,animation.push([i,i+1])}else animation.push([i,i]);return animation}function selection(n){animation=[];var o=0;for(i=0;i<n.length;i++){for(animation.push([o,-1,i]),o=i,j=i+1;j<n.length;j++)animation.push([j,-2,-5]),n[j]<n[o]?(animation.push([o,-1,j]),o=j):animation.push([j,-3,-5]);t=n[i],n[i]=n[o],n[o]=t,animation.push([i,o,-5])}return animation}function merge(n){const t=[];if(n.length<=1)return n;const i=n.slice();return mergeSort(n,0,n.length-1,i,t),t}function mergeSort(n,t,i,o,r){if(t==i)return;const u=Math.floor((t+i)/2);mergeSort(o,t,u,n,r),mergeSort(o,u+1,i,n,r),domerge(n,t,u,i,o,r)}function domerge(n,t,i,o,r,u){let a=t,h=t,e=i+1;for(;h<=i&&e<=o;)u.push([h,e]),u.push([h,e]),r[h]<=r[e]?(u.push([a,r[h]]),n[a++]=r[h++]):(u.push([a,r[e]]),n[a++]=r[e++]);for(;h<=i;)u.push([h,h]),u.push([h,h]),u.push([a,r[h]]),n[a++]=r[h++];for(;e<=o;)u.push([e,e]),u.push([e,e]),u.push([a,r[e]]),n[a++]=r[e++]}function swap(n,t,i,o){o.push([t,i,-1]);var r=n[t];n[t]=n[i],n[i]=r}function partition(n,t,i,o){for(var r=Math.floor((i+t)/2),u=n[Math.floor((i+t)/2)],a=t,h=i;a<=h;){for(;n[a]<u;)o.push([a,r,-2]),o.push([a,r,-3]),a++;for(o.push([a,r,-2]),o.push([a,r,-3]);n[h]>u;)o.push([h,r,-2]),o.push([h,r,-3]),h--;o.push([h,r,-2]),o.push([h,r,-3]),a==r&&(r=h),h==r&&(r=a),a<=h&&(swap(n,a,h,o),a++,h--)}return a}function quickSort(n,t,i,o){var r;return n.length>1&&(t<(r=partition(n,t,i,o))-1&&quickSort(n,t,r-1,o),r<i&&quickSort(n,r,i,o)),o}function quick(n){var t=[];return quickSort(n,0,n.length-1,t),console.log(n),t}