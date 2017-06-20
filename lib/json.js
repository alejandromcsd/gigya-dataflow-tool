export function BeautifyJson(json) {
  return JSON.stringify(json, null, 4);
}

export function ToJson(str) {
  try {
    return JSON.parse(str);
  } catch (e) {
    return null;
  }
}

export function EnsureUniqueId(items, newItem) {
  if (items.find(i => i.id === newItem.id)) {
    const timestamp = +new Date();
    return {
      ...newItem,
      id: `${newItem.id}${timestamp}`,
    };
  }
  return newItem;
}

export function GetFreezer() {
  const json = {
    hola: 'amigo',
    adios: 'enemigo',
    obj: {
      hi: 'man',
      bye: 'dude',
    },
    arr: ['a', 'b', {
      c: 1,
    }, 'd'],
  };

  // eslint-disable-next-line
  return new Freezer({
    json,
  });
}
