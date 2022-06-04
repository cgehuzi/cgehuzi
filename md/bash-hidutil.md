<< [На главную](../README.md)

# HIDUTIL - переназначение клавиш на macOS

---

[Remapping of keys in Mac OS X](https://superuser.com/questions/37042/remapping-of-keys-in-mac-os-x) – тред вопроса на форуме

## Переназначение клавиш

```bash
hidutil property --set '{"UserKeyMapping":[ ... ]}'
```

```json
{
  "UserKeyMapping": [
    {
      "HIDKeyboardModifierMappingSrc": 0x700000064, // [ § > ]
      "HIDKeyboardModifierMappingDst": 0x700000029 // [ Esc ]
    },
    {
      "HIDKeyboardModifierMappingSrc": 0x700000029, // [ Esc ]
      "HIDKeyboardModifierMappingDst": 0x700000064 // [ § > ]
    }
  ]
}
```

`HIDKeyboardModifierMappingSrc` – исходная клавиша (физическая)  
`HIDKeyboardModifierMappingDst` – назначаемая клавиша

> 1. Да, коды клавиш указываются без кавычек
> 2. `0x64` ===> `0x`7000000`64`
> 3. Переназначение происходит в обе стороны

---

Замена `§` на `Esc`:

```bash
hidutil property --set '{"UserKeyMapping":[{"HIDKeyboardModifierMappingSrc":0x700000064,"HIDKeyboardModifierMappingDst":0x700000029},{"HIDKeyboardModifierMappingSrc":0x700000029,"HIDKeyboardModifierMappingDst":0x700000064}]}'
```

## Проверка текущих переназначений

```bash
hidutil property --get "UserKeyMapping"
```

## Сброс переназначений

```bash
hidutil property --set '{"UserKeyMapping":[]}'
```
