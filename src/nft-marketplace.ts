import {
  NftListed as NftListedEvent,
  NftListingCancelled as NftListingCancelledEvent,
  NftListingUpdated as NftListingUpdatedEvent,
  NftMinted as NftMintedEvent,
  NftRequested as NftRequestedEvent,
  NftSold as NftSoldEvent,
  OwnershipTransferred as OwnershipTransferredEvent
} from "../generated/NftMarketplace/NftMarketplace"
import {
  NftListed,
  NftListingCancelled,
  NftListingUpdated,
  NftMinted,
  NftRequested,
  NftSold,
  OwnershipTransferred
} from "../generated/schema"

export function handleNftListed(event: NftListedEvent): void {
  let entity = new NftListed(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.tokenId = event.params.tokenId
  entity.owner = event.params.owner
  entity.price = event.params.price
  entity.ierc721TokenAddress = event.params.ierc721TokenAddress

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleNftListingCancelled(
  event: NftListingCancelledEvent
): void {
  let entity = new NftListingCancelled(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.tokenId = event.params.tokenId
  entity.owner = event.params.owner
  entity.ierc721TokenAddress = event.params.ierc721TokenAddress

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleNftListingUpdated(event: NftListingUpdatedEvent): void {
  let entity = new NftListingUpdated(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.tokenId = event.params.tokenId
  entity.owner = event.params.owner
  entity.price = event.params.price
  entity.ierc721TokenAddress = event.params.ierc721TokenAddress

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleNftMinted(event: NftMintedEvent): void {
  let entity = new NftMinted(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.owner = event.params.owner
  entity.tokenId = event.params.tokenId
  entity.ierc721TokenAddress = event.params.ierc721TokenAddress

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleNftRequested(event: NftRequestedEvent): void {
  let entity = new NftRequested(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.requester = event.params.requester

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleNftSold(event: NftSoldEvent): void {
  let entity = new NftSold(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.owner = event.params.owner
  entity.tokenId = event.params.tokenId
  entity.ierc721TokenAddress = event.params.ierc721TokenAddress
  entity.price = event.params.price

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleOwnershipTransferred(
  event: OwnershipTransferredEvent
): void {
  let entity = new OwnershipTransferred(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.previousOwner = event.params.previousOwner
  entity.newOwner = event.params.newOwner

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
