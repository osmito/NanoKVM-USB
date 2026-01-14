const jp = {
  translation: {
    camera: {
      tip: '認証を待っています...',
      denied: '認証に失敗しました',
      authorize:
        'リモートデスクトップにはカメラの許可が必要です。設定でカメラの許可を付与してください。',
      failed: 'カメラの接続に失敗しました。もう一度お試しください。'
    },
    modal: {
      title: 'USBデバイスを選択',
      selectVideo: 'ビデオ入力デバイスを選択してください',
      selectSerial: 'シリアルデバイスを選択してください',
      selectBaudRate: 'ボーレートを選択してください'
    },
    menu: {
      serial: 'シリアル',
      keyboard: 'キーボード',
      mouse: 'マウス',
      serialPort: {
        device: 'シリアルデバイス',
        baudRate: 'ボーレート',
        noDeviceFound: 'シリアルデバイスが見つかりません',
        clickToSelect: 'クリックしてシリアルポートを選択'
      }
    },
    video: {
      resolution: '解像度',
      scale: '倍率',
      customResolution: 'カスタム',
      device: 'デバイス',
      custom: {
        title: 'カスタム解像度',
        width: '幅',
        height: '高さ',
        confirm: 'OK',
        cancel: 'キャンセル'
      }
    },
    keyboard: {
      paste: '貼り付け',
      virtualKeyboard: 'キーボード',
      shortcut: {
        ctrlAltDel: 'Ctrl + Alt + Delete',
        title: 'ショートカット',
        custom: 'カスタム',
        capture: 'ここをクリックしてショートカットをキャプチャ',
        clear: 'クリア',
        save: '保存'
      }
    },
    mouse: {
      cursor: {
        title: 'カーソル',
        pointer: 'ポインター',
        grab: 'グラブ',
        cell: 'セル',
        hide: '非表示'
      },
      mode: 'マウスモード',
      absolute: '絶対モード',
      relative: '相対モード',
      direction: 'ホイールの方向',
      scrollUp: '上にスクロール',
      scrollDown: '下にスクロール',
      speed: 'ホイール速度',
      fast: '速い',
      slow: '遅い',
      requestPointer: '相対モードを使用中です。デスクトップをクリックしてマウスポインターを取得してください。',
      jiggler: {
        title: 'マウスジグラー',
        enable: '有効',
        disable: '無効'
      }
    },
    settings: {
      title: '設定',
      appearance: {
        title: '外観',
        language: '言語',
        menu: 'メニューバー',
        menuTips: '起動時にメニューバーを開く'
      },
      update: {
        title: '更新の確認',
        latest: '最新バージョンをお使いです。',
        outdated: 'アップデートが利用可能です。今すぐ更新しますか？',
        downloading: 'ダウンロード中...',
        installing: 'インストール中...',
        failed: '更新に失敗しました。もう一度お試しください。',
        confirm: '確認',
        cancel: 'キャンセル'
      },
      about: {
        title: 'About',
        version: 'バージョン',
        community: 'コミュニティ'
      },
      reset: {
        title: '設定のリセット',
        description: 'すべてのアプリケーション設定をデフォルト値にリセット',
        warning: '警告',
        warningDescription: 'この操作は元に戻せません。すべてのカスタム設定が失われます。',
        button: 'すべての設定をリセット',
        confirmTitle: 'リセットの確認',
        confirmMessage:
          'すべての設定をリセットしてもよろしいですか？この操作は元に戻せません。',
        confirm: 'リセット',
        cancel: 'キャンセル'
      }
    }
  }
}

export default jp
